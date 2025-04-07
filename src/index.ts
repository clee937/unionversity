import courses from "./courses";
import studyGroups from "./studyGroups";

type Course = {
  id: number;
  studyGroupId: number;
  title: string;
  keywords: string[];
  eventType: string;
};

type StudyGroup = {
  id: number;
  courseId: number;
  title: string;
  keywords: string[];
  eventType: string;
};

type SearchEventsOptions = {
  query: string | number;
  eventType: "course" | "group";
};

const searchEvents = (options: SearchEventsOptions) => {
  const events: Course[] | StudyGroup[] =
    options.eventType === "course" ? courses : studyGroups;

  return events.filter((event: Course | StudyGroup) => {
    // type narrowing / type guard
    if (typeof options.query === "number") {
      return event.id === options.query;
    }

    // type narrowing / type guard
    if (typeof options.query === "string") {
      return event.keywords.includes(options.query);
    }
  });
};

let enrolledEvents: (Course | StudyGroup)[] = [];

// add event to enrolled events list
const enroll = (event: Course | StudyGroup) => {
  enrolledEvents.push(event);
};

const printCourseTitles = (enrolledEvents: (Course | StudyGroup)[]) => {
  console.log("You are enrolled in the following: ");
  enrolledEvents.forEach((event) => console.log(event.title));
};

const searchResults = searchEvents({ query: "art", eventType: "course" });

enroll(searchResults[0]);
enroll(searchResults[1]);

printCourseTitles(enrolledEvents);

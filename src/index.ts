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
  eventType: "courses" | "groups";
};

const searchEvents = (options: SearchEventsOptions) => {
  const events: Course[] | StudyGroup[] =
    options.eventType === "courses" ? courses : studyGroups;

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

const searchResults = searchEvents({ query: "art", eventType: "courses" });

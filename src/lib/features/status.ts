export const STATUS = {
  IDLE: "idle",
  READY: "ready",
  LOADING: "loading",
  LOADING_NOTE: "loading_note",
  EDITING: "editing",
  SAVING: "saving",
  SAVED: "saved",
  ERROR: "error",
  CREATING: "creating",
  DELETING: "deleting",
  DELETED: "deleted",
} as const;

export type Status = (typeof STATUS)[keyof typeof STATUS];

const STATUS_LABELS: Record<Status, string> = {
  [STATUS.IDLE]: "Idle",
  [STATUS.READY]: "Ready",
  [STATUS.LOADING]: "Loading...",
  [STATUS.LOADING_NOTE]: "Loading note...",
  [STATUS.EDITING]: "Editing…",
  [STATUS.SAVING]: "Saving…",
  [STATUS.SAVED]: "Saved",
  [STATUS.ERROR]: "Error",
  [STATUS.CREATING]: "Creating...",
  [STATUS.DELETING]: "Deleting...",
  [STATUS.DELETED]: "Deleted",
};

const STATUS_SET = new Set<string>(Object.values(STATUS));

export function isStatus(value: unknown): value is Status {
  return typeof value === "string" && STATUS_SET.has(value);
}

export function formatStatus(status: unknown): string {
  if (!isStatus(status)) {
    return String(status ?? "");
  }

  return STATUS_LABELS[status];
}

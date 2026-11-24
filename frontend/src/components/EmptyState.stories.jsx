import EmptyState from "./EmptyState";

export default {
  title: "Components/EmptyState",
  component: EmptyState,
};

export const Students = {
  args: {
    variant: "students",
    title: "No students yet",
    description: "Import your student roster to start tracking fees and payments.",
    actionLabel: "Import Students",
    onAction: () => {},
  },
};

export const Payments = {
  args: {
    variant: "payments",
    title: "No payments recorded",
    description: "Payments will appear here after families pay their fees.",
  },
};

export const Fees = {
  args: {
    variant: "fees",
    title: "Set up your first fee type",
    description: "Create a fee structure to assign charges to your students.",
    actionLabel: "Create Fee",
    actionHref: "#create-fee",
  },
};

export const Reports = {
  args: {
    variant: "reports",
    title: "No reports generated yet",
    description: "Generate a report to review payments and collections.",
    actionLabel: "Generate Report",
    actionHref: "#report-filters",
  },
};

export const Notifications = {
  args: {
    variant: "notifications",
    title: "You're all caught up 🎉",
    description: "There are no new notifications.",
  },
};

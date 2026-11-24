import { useId } from "react";

const ILLUSTRATIONS = {
  students: "/illustrations/students.svg",
  payments: "/illustrations/payments.svg",
  fees: "/illustrations/fees.svg",
  reports: "/illustrations/reports.svg",
  notifications: "/illustrations/notifications.svg",
};

export default function EmptyState({
  variant = "students",
  title,
  description,
  actionLabel,
  actionHref,
  onAction,
  actionDisabled = false,
}) {
  const titleId = useId();
  const illustration = ILLUSTRATIONS[variant] || ILLUSTRATIONS.students;

  return (
    <section className="empty-state-panel" role="status" aria-labelledby={titleId}>
      <img className="empty-state-illustration" src={illustration} alt="" aria-hidden="true" />
      <h2 id={titleId} className="empty-state-panel-title">{title}</h2>
      {description && <p className="empty-state-panel-description">{description}</p>}
      {actionLabel && actionHref && (
        <a href={actionHref} className="btn btn-primary empty-state-action">
          {actionLabel}
        </a>
      )}
      {actionLabel && onAction && (
        <button
          type="button"
          className="btn btn-primary empty-state-action"
          onClick={onAction}
          disabled={actionDisabled}
        >
          {actionLabel}
        </button>
      )}
    </section>
  );
}

interface EmptyStateProps {
  readonly query: string;
  readonly onClear: () => void;
}

/** Shown when a search or a filter matches no dish. Screen only. */
export function EmptyState({ query, onClear }: EmptyStateProps): React.JSX.Element {
  return (
    <div className="empty-state no-print" role="status">
      <p className="empty-state__title" lang="mr">
        {query === ''
          ? 'या निवडीशी जुळणारा पदार्थ नाही.'
          : `“${query}” साठी कोणताही पदार्थ सापडला नाही.`}
      </p>
      <p className="empty-state__subtitle" lang="en">
        No dish matches that search.
      </p>
      <button type="button" className="toolbar__chip toolbar__chip--solid" onClick={onClear}>
        संपूर्ण मेनू पहा / Show the full menu
      </button>
    </div>
  );
}

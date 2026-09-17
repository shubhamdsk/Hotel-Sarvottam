import { Component, type ErrorInfo, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  readonly children: ReactNode;
}

interface ErrorBoundaryState {
  readonly error: Error | null;
}

/**
 * The menu is data driven, so a bad section id or a malformed price would
 * otherwise blank the whole page. Show the problem instead, with enough detail
 * to fix the data file it came from.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  override state: ErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  override componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('The menu failed to render.', error, info.componentStack);
  }

  override render(): ReactNode {
    const { error } = this.state;
    if (!error) return this.props.children;

    return (
      <div className="app-error" role="alert">
        <h1 className="app-error__title">मेनू लोड होऊ शकला नाही</h1>
        <p className="app-error__lead">The menu could not be rendered.</p>
        <pre className="app-error__detail">{error.message}</pre>
        <p className="app-error__hint">Check the dish data in src/data — most likely an unknown section id.</p>
      </div>
    );
  }
}

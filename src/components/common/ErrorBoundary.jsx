import { Component } from "react";

export class ErrorBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    if (this.state.failed) return <main className="grid min-h-screen place-items-center p-6 text-center"><div><h1 className="text-3xl font-semibold">The interface hit an unexpected state.</h1><button className="mt-5 rounded-full bg-[var(--text)] px-5 py-3 text-sm text-[var(--bg)]" onClick={() => window.location.reload()}>Reload portfolio</button></div></main>;
    return this.props.children;
  }
}

import { Component, ReactNode, ErrorInfo } from 'react';
import { Error } from '@/components/ui';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.log('Возникла ошибка!', error, info);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <Error />;
    }

    return this.props.children;
  }
}

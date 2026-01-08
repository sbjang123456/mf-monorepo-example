import { ReactNode } from 'react';
import { Container } from '@repo/ui';
import { Header } from '../../header';

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="py-12">
      <Container>
        <Header />
        {children}
      </Container>
    </div>
  );
};


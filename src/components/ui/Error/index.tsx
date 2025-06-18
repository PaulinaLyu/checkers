import { RefreshCw } from 'lucide-react';
import styles from './Error.module.css';
import { Button } from '../Button';

export const Error = () => {
  const handleReload = () => window.location.reload();

  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Oops! Something went wrong:(</h1>
        <p className={styles.message}>
          There was an error in the application. Please reload the page or contact the administrator.
        </p>
        <Button onClick={handleReload} icon={<RefreshCw size={18} />} text="Reload page" variant="newGame" />
      </div>
    </section>
  );
};

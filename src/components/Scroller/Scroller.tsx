import styles from "./Scroller.module.css";

type Props = {
  section: string;
};

export default function Scroller({ section }: Props) {
  return (
    <div className={styles.container}>
      <a href={section}>
        <div className={styles.scroller}>&darr;</div>
      </a>
    </div>
  );
}

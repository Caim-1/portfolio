import styles from "./Contact.module.css";

type Props = {
  name: string;
  type?: string;
  value: string;
  length: number;
  isTextArea?: boolean;
  placeholder: string;
  handleChange: (e: string) => void;
};

const FormInput = ({
  name,
  type,
  value,
  length,
  isTextArea,
  placeholder,
  handleChange,
}: Props) => {
  return (
    <div className={styles.formItem}>
      <label htmlFor={name}>{placeholder}</label>
      {isTextArea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          maxLength={length}
          placeholder={placeholder}
          onChange={(e) => handleChange(e.target.value)}
          required
        />
      ) : (
        <input
          id={name}
          type={type || "text"}
          name={name}
          value={value}
          maxLength={length}
          placeholder={placeholder}
          onChange={(e) => handleChange(e.target.value)}
          required
        />
      )}
    </div>
  );
};

export default FormInput;

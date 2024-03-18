import { RegisterFormFields } from "src/types/FormFields";

const registerOptions: RegisterFormFields = {
  email: {
    pattern: {
      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
      message: "Invalid email",
    },
    maxLength: {
      value: 50,
      message: "Email must be less than 50 characters",
    },
    required: "Email is required",
  },
  username: {
    required: "Username is required",
    maxLength: {
      value: 20,
      message: "Username must be less than 20 characters",
    },
    minLength: {
      value: 3,
      message: "Username must be more than 3 characters",
    },
    pattern: {
      value: /^[a-zA-Z0-9_]*$/,
      message: "Username can only contain letters, numbers, and _",
    },
  },
  loginPassword: {
    required: "Password is required",
  },
  registerPassword: (emailValue: string) => ({
    required: "Password is required",
    validate: (value) => {
      return value.length < 8
        ? "Password must be at least 8 characters"
        : !/[A-Z]/.test(value)
        ? "Password must contain at least one uppercase letter"
        : !/[a-z]/.test(value)
        ? "Password must contain at least one lowercase letter"
        : !/[0-9]/.test(value)
        ? "Password must contain at least one number"
        : !/[^A-Za-z0-9]/.test(value)
        ? "Password must contain at least one special character"
        : emailValue === value
        ? "Password must be different from email"
        : true;
    },
  }),
};

export default registerOptions;

import { FormError } from '@interfaces/components';
import { UserModel, UserTypes } from '@interfaces/user';
import { useMemo } from 'react';
import { Form, Row } from './styles';

interface RegisterFormProps {
  errors: FormError[];
  setFormValues: any;
  values: UserModel;
}

export const RegisterForm = ({
  errors,
  setFormValues,
  values,
}: RegisterFormProps) => {
  const { type } = values;

  const error = useMemo(() => {
    const name = errors?.find((error) => error.label === 'name') ?? null;
    const age = errors?.find((error) => error.label === 'age') ?? null;

    return { name, age };
  }, [errors]);

  return (
    <Form>
      <Row>
        <label htmlFor="type">Individual ou Grupo</label>
        <select
          id="type"
          required
          value={values.type}
          onChange={(e) =>
            setFormValues((oldValue: UserModel) => {
              const type = e.target.value as UserTypes;
              return { ...oldValue, type };
            })
          }
        >
          <option value="single">Individual</option>
          <option value="group">Grupo</option>
        </select>
      </Row>
      <Row error={!!error.name}>
        <label htmlFor="name">
          {type === 'single' ? 'Nome do Aluno' : 'Nome do Grupo'}
        </label>
        <input
          id="name"
          required
          placeholder={error.name ? error.name.message : ''}
          type="text"
          onChange={(e) =>
            setFormValues((oldValue: UserModel) => ({
              ...oldValue,
              name: e.target.value,
            }))
          }
          value={values.name}
        />
      </Row>
      <Row error={!!error.age}>
        <label htmlFor="agr">
          {type === 'single' ? 'Idade do Aluno' : 'Idade média do Grupo'}
        </label>
        <input
          id="age"
          required
          type="number"
          min={1}
          max={120}
          step="1"
          placeholder={error.age ? error.age.message : ''}
          onChange={(e) =>
            setFormValues((oldValue: UserModel) => ({
              ...oldValue,
              age: Number(e.target.value),
            }))
          }
          value={values.age}
        />
      </Row>
    </Form>
  );
};

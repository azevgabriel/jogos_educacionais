import { PopOverWrapper } from '@components/PopOver';
import { Button } from '@components/utils';
import { useConfig } from '@hooks/useConfig';
import { FormError } from '@interfaces/components';
import { UserModel } from '@interfaces/user';
import { getUserIp } from '@utils/device';
import { useCallback, useState } from 'react';
import { RegisterForm } from './RegisterForm';
import { Session } from './Session';
import { Container, Logo, RegisterWrapper } from './styles';

export const HeaderBar = () => {
  const { setUser, user } = useConfig();

  const initialFormValues: UserModel = {
    type: 'single',
    name: '',
    age: NaN,
    ip: '',
  };

  const [popOverVisible, setPopOverVisible] = useState(false);
  const [formValues, setFormValues] = useState<UserModel>(initialFormValues);
  const [errors, setErrors] = useState<FormError[]>([]);

  const onCloseLogin = () => {
    setPopOverVisible(false);
    setFormValues({ ...initialFormValues });
    setErrors([]);
  };

  const handlePopOver = () => {
    setPopOverVisible(!popOverVisible);
  };

  const validateForm = useCallback(() => {
    const { name, age } = formValues;
    const errors: FormError[] = [];
    setErrors([]);

    if (!name) {
      errors.push({
        message: 'Nome é obrigatório',
        label: 'name',
      });
    }

    if (!age) {
      errors.push({
        message: 'Idade é obrigatório',
        label: 'age',
      });
    } else if (age > 120 || age < 0) {
      errors.push({
        message: 'Idade inválida',
        label: 'age',
      });
      setFormValues((oldValue) => ({ ...oldValue, age: NaN }));
    }

    if (errors.length > 0) {
      setErrors(errors);
      return false;
    }

    return true;
  }, [formValues]);

  const onSubmitLogin = async () => {
    const isCorrect = validateForm();
    if (!isCorrect) return;

    const ip = await getUserIp();
    setUser({ ...formValues, name: formValues.name.trim(), ip });
    onCloseLogin();
  };

  return (
    <Container>
      <Logo>
        <h1>Jogos Inclusivos</h1>
      </Logo>
      <div className="contentWrapper"></div>
      {user ? (
        <Session />
      ) : (
        <RegisterWrapper>
          <PopOverWrapper
            visible={popOverVisible}
            body={{
              children: (
                <RegisterForm
                  errors={errors}
                  setFormValues={setFormValues}
                  values={formValues}
                  key="header-register-form"
                />
              ),
              height: '85%',
            }}
            footer={{
              children: (
                <>
                  <Button
                    width="40%"
                    height="90%"
                    onClick={onCloseLogin}
                    type="reset"
                    text="Cancelar"
                  />
                  <Button
                    width="40%"
                    height="90%"
                    onClick={onSubmitLogin}
                    type="submit"
                    text="Salvar"
                  />
                </>
              ),
              height: '18%',
              alignHorizontal: 'space-evenly',
              alignVertical: 'center',
            }}
          >
            <button className="registerButton" onClick={handlePopOver}>
              Cadastrar
            </button>
          </PopOverWrapper>
        </RegisterWrapper>
      )}
    </Container>
  );
};

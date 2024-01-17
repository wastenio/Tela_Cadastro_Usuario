import { MdEmail } from 'react-icons/md';
import { CiLock } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useContext } from 'react';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Column, Container, Criartext, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles';
import { IFormData } from './types';
import { AuthContext } from '../../context/auth';

const schema = yup
  .object({
    email: yup
        .string()
        .email('email não é valido')
        .required('Campo obrigatório'),
    password: yup
        .string()
        .min(3, 'No minimo 3 caracteres')
        .required('Campo obrigatório'),
  })
  .required()

const Login = () => {
    const { handleLogin} = useContext(AuthContext);

    const {
        control, 
        handleSubmit, 
        formState: { errors },
     } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async (formData: IFormData) => {
        handleLogin(formData);
       
    };

    return(<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias
                     e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu login</TitleLogin>
                    <SubtitleLogin>Faça seu cadastro e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />}/>
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<CiLock />} />
                        <Button title="Entrar" variant="secondary" type="submit"/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <Criartext>Criar conta</Criartext>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
} 

export { Login }
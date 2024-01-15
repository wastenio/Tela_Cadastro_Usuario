import { MdEmail } from 'react-icons/md';
import { CiLock } from "react-icons/ci";
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Column, Container, FazerLoginText, TenhoContaText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles';

const schema = yup
  .object({
    nome: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório'),
    email: yup.string().email('email não é valido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório'),
  })
  .required()

const Cadastro = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const handleClickSignIn = () => {
        navigate('/login')
    }

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
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu cadastro e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(handleClickSignIn)}>
                        <Input name="nome" errorMessage={errors?.nome?.message} control={control} placeholder="Nome completo" leftIcon={<BsFillPersonFill />}/>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />}/>
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<CiLock />} />
                        <Button title="Criar minha conta" variant="secondary" type="submit"/>
                    </form>
                    <Row>
                        Ao clicar em "criar minha conta grátis", 
                        declaro que aceito as Políticas de 
                        Privacidade e os Termos de Uso da DIO.
                    </Row>
                    <Row>
                        <TenhoContaText>Já tenho conta</TenhoContaText>
                        <FazerLoginText>Fazer login</FazerLoginText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
} 

export { Cadastro }
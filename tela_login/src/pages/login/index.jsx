import { MdEmail } from 'react-icons/md';
import { CiLock } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { Column, Container, Criartext, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './atyles';

const Login = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/feed')
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
                <form>
                    <Input placeholder="E-mail" leftIcon={<MdEmail />}/>
                    <Input placeholder="Senha" type="password" leftIcon={<CiLock />} />
                    <Button title="Entrar" variant="secondary" onClick={handleClickSignIn} type="button"/>
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
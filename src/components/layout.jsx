import { Outlet } from 'react-router-dom';
import { CustomLink } from './customLink';


const Layout = () => {
    return (
        <>
            <header className='header'>
                <CustomLink to='/' className='textHeader'>o o o</CustomLink>
                <CustomLink to='/sotr' className='textHeader'>Сотрудники</CustomLink>
                <CustomLink to='/instr' className='textHeader'>Инструменты</CustomLink>
                <CustomLink to='/dok' className='textHeader'>Документы</CustomLink>
                <CustomLink to='/krab' className='textHeader'>Работа</CustomLink>
                <CustomLink to='/prr' className='textHeader'>Предсезонная проверка</CustomLink>
                <CustomLink to='/view' className='textHeader'>Представления</CustomLink>
            </header>
        <Outlet/>   {/*сюда вставляются отрисовки страниц из app*/}
            <footer>
                <div className='textFooter'>is_eds(beta) ver.0.1.1 </div>
            </footer>
        </>
    )
}

export {Layout};
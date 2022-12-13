import { Outlet } from 'react-router-dom';
import { CustomLink } from './customLink';

const Layout = ({ stage }) => {
    const nav = [
        {
            content: <CustomLink to='/sotr' className='textHeader'>Сотрудники</CustomLink>,
            id: 1
        },
        {
            content: <CustomLink to='/instr' className='textHeader'>Инструменты</CustomLink>,
            id: 2
        },
        {
            content: <CustomLink to='/dok' className='textHeader'>Документы</CustomLink>,
            id: 3
        },
        {
            content: <CustomLink to='/krab' className='textHeader'>Работа</CustomLink>,
            id: 4
        },
        {
            content: <CustomLink to='/prr' className='textHeader'>Предсезонная проверка</CustomLink>,
            id: 5
        },
        {
            content: <CustomLink to='/view' className='textHeader'>Представления</CustomLink>,
            id: 6
        }
    ]


    return (
        <>
            <header className='header'>
                <CustomLink to='/' className='textHeader'>o o o</CustomLink>
                {stage === 2 && nav?.map(e => (e.content))}
                {stage === 1 && nav?.map((e) => (e.id === 2 && e.content))}
                {stage === 1 && nav?.map((e) => (e.id === 5 && e.content))}
                {stage === 1 && nav?.map((e) => (e.id === 6 && e.content))}


            </header>
            <Outlet />   {/*сюда вставляются отрисовки страниц из app*/}
            <footer>
                <div className='textFooter'>is_eds(beta) ver.0.9.8 </div>
            </footer>
        </>
    )
}

export { Layout };
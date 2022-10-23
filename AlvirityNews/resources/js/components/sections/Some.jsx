import SectionTwo from './SectionTwo';
import style from './section.module.css';
import Inso from './Inso';

const Some = ()=> {
    return (
       <>
       <section className= {style.sectionM}>
        <SectionTwo props={{title:'games',id: 2, style: {'JusifyContent':'flex-end', 'borderRadius': '20px 0 0 20px'}, titles: 'Игровые новости'}}/>
        <SectionTwo props={{title:'technology',id: 3, style: {'JusifyContent':'flex-start', 'borderRadius': 20},titles: 'Технологии'}}/>
        <SectionTwo props={{title:'gadjest',id: 5, style: {'JusifyContent':'flex-end', 'borderRadius': '20px 0 0 20px'},titles: 'Гаджеты'}}/>
        <SectionTwo props={{title:'kybersport',id: 4, style: {'JusifyContent':'flex-start', 'borderRadius': 20},titles: 'Киберспорт'}}/>
        <SectionTwo props={{title:'alvirity',id: 6, style: {'JusifyContent':'flex-end', 'borderRadius': '20px 0 0 20px'},titles: 'Новости АльВиРити'}}/>
        <Inso></Inso>
       </section>  
       </>
    )
}
export default Some;
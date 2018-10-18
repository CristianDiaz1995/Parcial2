import React from 'react';
import Panel from './Panel.js';
//Lista de imagenes
 import imagen1 from '../../img/Apple.png';
import imagen2 from '../../img/Amor.png';
import imagen3 from '../../img/Imagen2.png';
import imagen4 from '../../img/Reloj.png';


class Menu extends React.Component{
    render(){
        return(

           
            <div className='grid-container'>
            <div className='a'>
                <Panel title="Aprende DHIS 2" content="Nos complace su interés en DHIS 2. Aquí encontrará una colección de recursos destinados a ayudarle a conocer el sistema. Le recomendamos que consulte la documentación, la demostración y la información sobre nuestras academias, todas destinadas a su placer de aprendizaje." img={imagen1} />
                <br/>
                <br/>
            </div>
            
            <div className='b'>
                <Panel title="Documentacion" content="Aquí encontrará documentación del usuario, guía de implementación, manual del usuario final y guía del desarrollador." img={imagen2} />
                <br/>
                <br/>
           </div>
            <div className='c'>
                <Panel  title="Población" content ="Verifique la aplicación DHIS 2 de demostración que contiene una base de datos aleatoria de la instancia HMIS de Sierra Leona." img={imagen3} />
                <br/>
                <br/>
            </div>
            <div className='d'>
                <Panel title="Tutoriales" content="Eche un vistazo a los tutoriales que cubren una amplia gama de temas, que incluyen consejos y trucos útiles para la personalización, configuración y desarrollo de DHIS 2. ¿Tienes un tutorial útil que te gustaría compartir? Envíanoslo a post@dhis2.org ." img={imagen4} />
            </div>
        </div>

        
        )
    }
}
export default Menu; 
import React, {Component} from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';


class Home extends Component {

    render() {

        let buttonString = "Ir al blog"

        return (
            <div id="home">

                <Slider 
                    title="Bienvenido al curos de React con V&iacute;ctor Robles de victorroblesweb.es"
                    btn={buttonString}
                    size="slider-big"
                />

                <div className="center">

                    <div id="content">
                        <h1>&Uacute;ltimos Art&iacute;culos</h1>
                    </div>

                    <Sidebar />

                </div>
            
            </div>
        )

    }


}

export default Home;
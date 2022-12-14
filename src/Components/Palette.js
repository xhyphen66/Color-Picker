import React, {Component} from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import '../Style/Palette.css'

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500
        }
    }

    changeLevel = (newLevel) => {
        this.setState({level: newLevel});
    }

    render() {
        const {colors} = this.props.palette;
        const {level} = this.state;
        const colorBoxes = colors[this.state.level].map(color => (
            <ColorBox background={color.hex} name={color.name}/>
        ))
        return(
            <div className="Palette">
                <Navbar level={level} changeLevel={this.changeLevel}/>
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
            </div>
        )
    }
}

export default Palette;
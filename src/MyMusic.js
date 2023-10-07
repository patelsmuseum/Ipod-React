import React from 'react';
import sound from './assets/music/Senorita.mp3'

class MyMusic extends React.Component{
    
    constructor(){
        super();
        this.state = {
            isMounted : true
        }
    }

   
    componentDidMount(){
        let self = this;
        self.props.audio.play();

       
            self.props.audio.addEventListener("timeupdate",function(){
                if(self.state.isMounted){
                    var pos = self.props.audio.currentTime/self.props.audio.duration;
                    self.updateTime();
                    let fill = document.getElementById("fill");
                    console.log(fill);
                    if(fill !== null){
                        fill.style.width = pos*100 + "%";
                    }
                }
            })
        
    }


    updateTime = () =>{
       
        this.setState({
            audio : this.props.audio
        })
    }

    componentWillUnmount(){
        this.state.isMounted = false;
    }

    render(){
         let audio = this.props.audio;
        return(
            <div style={styles.myMusicContainer}>
                <div style={styles.titleBar}>
                        <p style={{fontWeight:'bold'}}>iPod</p>
                        <img style={styles.battery} src="https://cdn-icons-png.flaticon.com/128/2731/2731653.png"></img>
                </div>

                <div style={styles.info}>
                    <img style={styles.image} src="data:image/jpeg;base64,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"></img>
                    <div style={styles.subInfo}>
                        <h4 style={{marginBottom:'0.5rem'}}>Senorita</h4>
                        <p style={{marginBottom:'0'}}>Camilla Cobello</p>
                        <p>Shawn Mendes</p>
                    </div>
                    
                </div>

                <div style={styles.statusBar}>
                    <p style={styles.currTime}>{audio !== null ? Math.floor(audio.currentTime) : '0 / 0'}</p>
                    <div style={styles.seekBar}>
                        <div style={styles.fill} id='fill'></div>
                    </div>
                    <p style={styles.dur}>{audio != null ? Math.floor(audio.duration) : '0 / 0'}</p>
                </div>
                
            </div>
        );
    }
    
}

const styles = {
    myMusicContainer : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
    },
    image : {
        height : '75%',
        width : '45%',
        alignSelf : 'center'
    },
    info : {
        height : '70%',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-evenly'
    },
    statusBar : {
        width : '100%',
        height : '30%',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-evenly'
    },
    subInfo : {
        alignSelf : 'center'
    },
    seekBar : {
        width:'70%',
        height:'20%',
        border : '1px solid grey',
        cursor: 'pointer',
        alignSelf : 'center',
        display: 'flex',
    },
    fill : {
        height: '100%',
        backgroundColor: 'royalblue',
    },
    currTime : {
        margin : '0',
        alignSelf : 'center'
    },
    dur : {
        margin : '0',
        alignSelf : 'center'
    },
    titleBar : {
        height:'10%',
        width:'100%',
        borderRadius:'12px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        borderBottom: '1px solid #6c757d',
        padding : '1px 5px 10px 8px',
        display:'flex',
        flexDirecton : 'row',
        justifyContent : 'space-between'

    },
    battery :{
        width : '20px',
        height: '20px',
    }
}


export default MyMusic;
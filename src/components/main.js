import {useEffect, useState} from 'react'
import axios from 'axios'
export default function Main(){
    const [registerPage, setRegisterPage] = useState(false)
    const [loginPage, setLoginPage] = useState(false)
    const [method, registerMethod] = useState('number')
    const register = (val) =>{
        setRegisterPage(val)
    }
    const login = (val) =>{
        setLoginPage(val)
    }
    
    const changeRegisterMethod = ()=>{
        if(method=="email"){
            registerMethod("number")
        }else{
            registerMethod("email")
        }
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        const data = e.target
        if(data[2].value == data[3].value){
            const newUser = {
                Name: data[0].value,
                Arobase: data[0].value,
                Password : data[2].value ,
            }
            if(method=="number"){
                newUser.Phone = data[1].value
            }else{
                newUser.Email = data[1].value
            }
            console.log(newUser)
            axios.post('http://localhost:3001/register/',newUser).then(result=>{
             console.log('enregistré')
        }).catch(error=>{
            console.log(error)
            return Promise.reject(error)
        }
  )
        }else{
            console.log('eror')
        }
    }

    const handleSubmitLog = (e)=>{
        e.preventDefault()
        const user = {
            Email:e.target[0].value,
            Password:e.target[1].value
        }

        axios.post('http://localhost:3001/login/',user).then(result=>{
            console.log(result)
       }).catch(error=>{
           console.log(error)
           return Promise.reject(error)
       })
    }

    return(
    <div className="registerpage">   
            {
                registerPage?
                <div className="register-form">
                    <div className="form">
                        <div className="top-modal">
                            <p  className="cursor close" onClick={()=>{register(false)}}>x</p>
                            <img src="https://www.lter-europe.net/document-archive/image-gallery/albums/logos/TwitterLogo_55acee.png/image" alt=""/>
                        </div>
                        <div className="middle-modal">
                            <form method="post" onSubmit={handleSubmit}>
                                <p className="modal-title">Créer votre compte</p>
                                <input required type="text" name="name" placeholder='Nom et prénom' />
                                {
                                    method=="number"?   
                                    <>
                                    <input required type="number" name="phone" placeholder='Téléphone' />
                                    <p className="cursor change-option" onClick={changeRegisterMethod}>Utiliser un email</p>
                                    </>:
                                    <>
                                   <input required type="email" name="email" placeholder='Adresse mail' />
                                    <p className="cursor change-option" onClick={changeRegisterMethod}>Utiliser un numéro</p>
                                    </>
                                }
                                <input required type="password" name="pass1" placeholder='Mot de passe' />
                                <input required type="password" name="pass2" placeholder='Confirmez votre mot de passe   ' />
                           <div className="bottom-modal">
                            <input type="submit" value="M'inscrire"/>
                           </div>
                        </form>    
                    </div>
                    </div>
                </div>
                :null

            }
            {
                loginPage?
                <div className="register-form">
                    <div className="form">
                        <div className="top-modal">
                            <p  className="cursor close" onClick={()=>{login(false)}}>x</p>
                            <img src="https://www.lter-europe.net/document-archive/image-gallery/albums/logos/TwitterLogo_55acee.png/image" alt=""/>
                        </div>
                        <div className="middle-modal">
                            <form method="post" onSubmit={handleSubmitLog}>
                                <p className="modal-title">Continuer</p>
                                {
                                    method=="number"?   
                                    <>
                                    <input required type="number" name="phone" placeholder='Téléphone' />
                                    <p className="cursor change-option" onClick={changeRegisterMethod}>Utiliser un email</p>
                                    </>:
                                    <>
                                   <input required type="email" name="email" placeholder='Adresse mail' />
                                    <p className="cursor change-option" onClick={changeRegisterMethod}>Utiliser un numéro</p>
                                    </>
                                }
                                <input required type="password" name="pass1" placeholder='Mot de passe' />
                           <div className="bottom-modal">
                            <input type="submit" value="Connexion"/>
                           </div>
                        </form>    
                    </div>
                    </div>
                </div>
                :null

            }
        <div className="register">
            <div className="left-register">
                <img className="register-logo" src="https://icon-library.com/images/twitter-icon-png-white/twitter-icon-png-white-12.jpg" alt=""/>
            </div>
            <div className="right-register">
                <div className="top-register">
                    <img src="https://www.lter-europe.net/document-archive/image-gallery/albums/logos/TwitterLogo_55acee.png/image" alt=""/>
                </div>
                <div className="middle-register">
                    <p className="main-title">Ça se passe <br/> maintenant</p>
                    <p className="secondary-title">Rejoignez TwiTwi dès aujourd'hui</p>
                    <div className="register-btn">
                        <p  className="cursor" onClick={()=>{register(true)}}>S'inscrire avec un numéro de téléphone</p>
                    </div>
                    <div className="subtitle-cgu">
                        <p>En vous inscrivant, vous acceptez les Conditions d'Utilisation et la Politique de Confidentialité, incluant l'Utilisation de Cookies.</p>
                    </div>
                    <div className="login">
                        <p>Vous avez déjà un compte ?</p>
                        <div className="login-btn cursor">
                            <p  onClick={()=>{login(true)}}>Se connecter</p>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
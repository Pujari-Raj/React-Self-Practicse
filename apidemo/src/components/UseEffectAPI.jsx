import React,{useEffect, useState} from 'react'

const useEffectAPI = () => {

    const [userState, setUserState] = useState([]);

    const getUsers = async () => {
        const resp = await fetch('https://api.github.com/users');
        console.log(resp);

        // const data = await resp.json();
        // console.log(data);

        setUserState(await resp.json());
    } 

    useEffect(()=>{        
        getUsers();
    }, []);

  return (
    <>
    <h2>List of Github Users</h2>
    <div className="container-fluid mt-5">
        <div className="row text-center">
            {
                userState.map((currElement)=> {
                    return(
                        <div className="col-10 col-md-4 mt-5" key={currElement}>
                        <div className="card p-2">
                            <div className="d-flex align-items-center">
                                <div className="image">
                                    <img src="" alt="" srcSet="" />
                                </div>
                                <div className="ml-3 w-100">
                                    <h4 className='mb-0 mt-0 textLeft'>Demo</h4><span className='textLeft'>Developer</span>
                                    <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                        <div className="d-flex flex-column"><span className="articles">Articles</span><span className="number1">38</span></div>
                                        <div className="d-flex flex-column"><span className="followers">Followers</span><span className="number2">90</span></div>
                                        <div className="d-flex flex-column"><span className="rating">Rating</span><span className="number3">4</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    </div>
    </>
  )
}

export default useEffectAPI
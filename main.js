console.log("链接js成功")

cssq.onclick = () =>{
    const request = new XMLHttpRequest();
    request.open("GET","/style.css");
    request.onload = ()=>{

    console.log("发送成功")

    const style = document.createElement('style')
    style.innerHTML = request.response
    document.head.appendChild(style)
    }
    request.onerror = ()=>{
    console.log("失败了")
    }
    request.send();
}

jsq.onclick = () =>{
    const request = new XMLHttpRequest();
    request.open("GET","/main1.js");
    request.onload = ()=>{

    console.log("发送成功")

    const script = document.createElement('script')
    script.innerHTML = request.response
    document.body.appendChild(script)
    }
    request.onerror = ()=>{
    console.log("失败了")
    }
    request.send();
}

htmlq.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET","/index1.html");
    request.onload=()=>{
        const div = document.createElement('div')
        div.innerHTML = request.response;
        document.body.appendChild(div)
    }
    request.onerror=()=>{

    }
    request.send();
}

xmlq.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET","/index.xml");
    request.onreadystatechange=()=>{
        if (request.readyState === 4 && request.status ===200){
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        } 

    }
    request.send();
}

jsonq.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET","/json.xml");
    request.onreadystatechange=()=>{
        if (request.readyState === 4 && request.status ===200){
            const object = JSON.parse(request.response)
            console.log(object);
        } 


        alert("请求成功")

    }
    request.send();
}



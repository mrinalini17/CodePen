function run(){
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let output = document.getElementById("output").contentWindow.document;

    output.open();
    output.write(htmlCode+"<style>"+cssCode+"</style>");
    output.close();

    let script = output.createElement("script");
    script.textContent = jsCode;
    output.body.appendChild(script);
}
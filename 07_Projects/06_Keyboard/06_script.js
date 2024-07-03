// console.log('Project 6');
const projEle = document.querySelector("#insert");
window.addEventListener("keydown", function(e){
  console.log(e);
  projEle.innerHTML = `<table>
    <caption>
      Chai aur Javascript Proj 6!!
    </caption>
    <thead>
      <tr>
        <th scope="col">key</th>
        <th scope="col">keyCode</th>
        <th scope="col">keyVal</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${e.key}</td>
        <td>${e.code}</td>
        <td>${e.keyCode}</td>
      </tr>
    </tbody>
  </table>`
});
function Map() {
const list = [0, 1, 2,3];
return(
    <>
    <ul>
{list.map((item) => <li>{item}</li> )}
</ul>
</>
);
}

export default Map;

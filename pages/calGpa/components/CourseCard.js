const CourseCard = (props) => {
  return (
    <>
      {/* <p>This is Course card</p> */}
      <div id="block">
        <p>{props.name}<button id="delete" onClick = {() =>props.del(props.name)} >delete</button></p>
        <p>{props.grd}</p>
        <p>{props.crd}</p>
      </div>
    </>
  );
};

export default CourseCard;


import GetToken from '../functions/GetToken';

const Grid = (props) => {
    return (
      <div>
        <GetToken scope={"product.compact"}/>
      </div>
    );
  };

export default Grid;
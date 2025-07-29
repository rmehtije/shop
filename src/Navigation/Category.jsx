import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Category({ product }) {
  console.log('Category');
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item active>{product.category}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default Category;

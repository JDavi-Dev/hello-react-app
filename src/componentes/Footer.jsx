import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


const Footer = () => {
  return (
    <div className="fixed-bottom ">
      <MDBFooter className='bg-primary text-center text-white'>
        <MDBContainer className='p-4 pb-0'>
          <section className='mb-4'>
            <MDBBtn
              className='m-1'
              style={{ backgroundColor: '#3b5998', borderRadius: '50%', border: 'none', outline: 'none', boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.3)' }}
              href='#!'
              role='button'
            >
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>

            <MDBBtn
              className='m-1'
              style={{ backgroundColor: '#55acee', borderRadius: '50%', border: 'none', outline: 'none', boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.3)' }}
              href='#!'
              role='button'
            >
              <MDBIcon fab icon='twitter' />
            </MDBBtn>

            <MDBBtn
              className='m-1'
              style={{ backgroundColor: '#dd4b39', borderRadius: '50%', border: 'none', outline: 'none', boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.3)' }}
              href='#!'
              role='button'
            >
              <MDBIcon fab icon='google' />
            </MDBBtn>
            <MDBBtn
              className='m-1'
              style={{ backgroundColor: '#ac2bac', borderRadius: '50%', border: 'none', outline: 'none', boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.3)' }}
              href='#!'
              role='button'
            >
              <MDBIcon fab icon='instagram' />
            </MDBBtn>

            <MDBBtn
              className='m-1'
              style={{ backgroundColor: '#0082ca', borderRadius: '50%', border: 'none', outline: 'none', boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.3)' }}
              href='#!'
              role='button'
            >
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>

            <MDBBtn
              className='m-1'
              style={{ backgroundColor: '#333333' , borderRadius: '50%', border: 'none', outline: 'none', boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.3)'}}
              href='#!'
              role='button'
            >
              <MDBIcon fab icon='github' />
            </MDBBtn>
          </section>
        </MDBContainer>

        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
          © 2020 Copyright:
          <a className='text-white' href='https://mdbootstrap.com/'>
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter>
    </div>
  )
}


export default Footer
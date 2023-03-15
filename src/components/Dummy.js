import '../styles/Dummy.scss';

const SectionDummy = ({ number }) => {
  return (
    <section className={`dummy error-${number}`}>
      <span className="error-13 eye"></span>
      <span className="error-12 eye"></span>
      <span className="error-11 line"></span>
      <span className="error-10 line"></span>
      <span className="error-9  line"></span>
      <span className="error-8  line"></span>
      <span className="error-7  line"></span>
      <span className="error-6  head"></span>
      <span className="error-5  line"></span>
      <span className="error-4  line"></span>
      <span className="error-3  line"></span>
      <span className="error-2  line"></span>
      <span className="error-1  line"></span>
    </section>
  );
};

// --> pasarle el prop llamado number, en el primer section del return interpolar dummy-error con la prop number, y APP.js el SectionDummy, debe llevar el number = function getNumberOFErrors <--

export default SectionDummy;

import styles from "../../styles/utilities/standardCard.module.css"

const StandardCard = ({ header,className,mouseIn,cardBody, components = null }) => {
  return (
    <div className={`${className} ${styles.container}`} >
      {components ? (
        components
      ) : (
        <div>
          <h3 className={mouseIn?styles.underline:""} >{header}</h3>
          <p>{cardBody}</p>
        </div>
      )}
    </div>
  );
};

export default StandardCard;

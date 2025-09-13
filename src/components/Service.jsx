import { Item } from "../Data";

const ServiceItem = () => {
  return (
    <div className="service-item">
        {
            Item.map((serve)=>{
                const { id, title, description, icon } = serve
                return(
                    <div className="icon" key={id}>
                        <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      </div>
                )
            })
        }
      
    </div>
  );
};

export default ServiceItem;

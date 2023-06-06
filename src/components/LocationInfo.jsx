
import '../components/css/locationInfo.css'

const LocationInfo = ({location }) => {   
    
  return (
    <article className="location__content">
      <h2 className="location__name">{location?.name}</h2>
      <ul className="location__list">
        <li className="location__item item-1"><span className="location__label">Type</span><span className="location__value">{location?.type}</span></li>
        <li className="location__item item-2"><span className="location__label">Dimension</span><span className="location__value">{location?.dimension}</span></li>
        <li className="location__item item-3"><span className="location__label">Population</span><span className="location__value">{location?.residents.length}</span></li>
      </ul>
    </article>
  )
}

export default LocationInfo
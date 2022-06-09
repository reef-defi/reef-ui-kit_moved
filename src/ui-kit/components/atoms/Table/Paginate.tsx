import Icon from "./../Icon"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export interface Pagination {
  current: number,
  count: number,
  onChange: (...args: any[]) => any,
}

export interface Props extends Pagination {
  className?: string
}

const Paginate = ({
  current,
  count,
  onChange,
  className
}: Props): JSX.Element => {
  const getPages = () => {
    if (count === 2) return [1, 2]
    
    if (count > 2) {
      if (current === 1) return [1, 2, 3]
      if (current === count) return [count - 2, count - 1, count]
      return [current - 1, current, current + 1]
    }

    return []
  }

  return (
    <>
      {
        count > 1 &&
        <div
          className={`
            uik-paginate
            ${className || ''}
          `}
        >
          <div className="uik-paginate__wrapper">
            {
              count > 3 && current > 2 &&
              <button className="uik-paginate__first" onClick={() => onChange(1) }>
                <Icon icon={faChevronLeft}/>
                <Icon icon={faChevronLeft}/>
              </button>
            }
    
            {
              current > 1 &&
              <button className="uik-paginate__prev" onClick={() => onChange(current - 1) }>
                <Icon icon={faChevronLeft}/>
              </button>
            }
    
            {
              getPages().map((page, index) => (
                <button
                  key={`${page}-${index}`}
                  className={`
                    uik-paginate__page
                    ${page === current ? 'uik-paginate__page--current' : ''}
                  `}
                  onClick={() => onChange(page) }
                >
                  <span>{ page }</span>
                </button>
              ))
            }
    
            {
              current < count &&
              <button className="uik-paginate__next" onClick={() => onChange(current + 1) }>
                <Icon icon={faChevronLeft}/>
              </button>
            }
    
            {
              count > 3 && current < count - 1 &&
              <button className="uik-paginate__last" onClick={() => onChange(count) }>
                <Icon icon={faChevronLeft}/>
                <Icon icon={faChevronLeft}/>
              </button>
            }
          </div>
        </div>
      }
    </>
  )
}

export default Paginate
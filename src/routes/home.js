import {Link} from 'react-router-dom';
import verifications from '../data/verifications';

export const route = () => {
  return (
      <div>
        <h2>Home</h2>
        <table>
          {
            verifications.map(verification => {
              const {id, name} = verification,
                  href = `/verification/${id}`;
              return <tr>
                <td><Link to={href}>{name}</Link></td>
              </tr>;
            })
          }
        </table>
      </div>
  );
};

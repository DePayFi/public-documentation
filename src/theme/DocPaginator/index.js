import PaginatorNavLink from '@theme/PaginatorNavLink';
import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// <div>
//   <strong>Was this page helpful?</strong>
//   <button type="button" className="btn btn-primary btn-sm ms-2">
//     <FontAwesomeIcon icon={ faThumbsUp } className="me-2" />
//     Yes
//   </button>
//   <button type="button" className="btn btn-primary btn-sm ms-2">
//     <FontAwesomeIcon icon={ faThumbsDown } className="me-2" />
//     No
//   </button>
// </div>

export default function DocPaginator(props) {
  const {previous, next} = props;
  return (
    <div className='doc-item-footer'>
      <nav
        className="pagination-nav docusaurus-mt-lg"
        aria-label={translate({
          id: 'theme.docs.paginator.navAriaLabel',
          message: 'Docs pages navigation',
          description: 'The ARIA label for the docs pagination',
        })}>
        {previous && (
          <PaginatorNavLink
            {...previous}
            subLabel={
              <Translate
                id="theme.docs.paginator.previous"
                description="The label used to navigate to the previous doc">
                Previous
              </Translate>
            }
          />
        )}
        {next && (
          <PaginatorNavLink
            {...next}
            subLabel={
              <Translate
                id="theme.docs.paginator.next"
                description="The label used to navigate to the next doc">
                Next
              </Translate>
            }
            isNext
          />
        )}
      </nav>
    </div>
  );
}

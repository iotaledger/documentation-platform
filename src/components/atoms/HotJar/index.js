import PropTypes from 'prop-types';
import React from 'react';

class HotJar extends React.PureComponent {
    static propTypes = {
        id: PropTypes.string
    };

    render() {
        if (!this.props.id) {
            return null;
        }

        const src = `(function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:${this.props.id},hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`;

		return <script dangerouslySetInnerHTML={{ __html: src }} />;
	}
}

export default HotJar;

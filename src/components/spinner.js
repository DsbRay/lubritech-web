import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	width: 100%;
	text-align: center;

.cssload-speeding-wheel {
	width: 25px;
	height: 25px;
	margin: 0 auto;
	border: 3px solid #fff;
	border-radius: 50%;
	border-left-color: transparent;
	border-right-color: transparent;
	animation: cssload-spin 875ms infinite linear;
		-o-animation: cssload-spin 875ms infinite linear;
		-ms-animation: cssload-spin 875ms infinite linear;
		-webkit-animation: cssload-spin 875ms infinite linear;
		-moz-animation: cssload-spin 875ms infinite linear;
}

@keyframes cssload-spin {
	100%{ transform: rotate(360deg); transform: rotate(360deg); }
}

@-o-keyframes cssload-spin {
	100%{ -o-transform: rotate(360deg); transform: rotate(360deg); }
}

@-ms-keyframes cssload-spin {
	100%{ -ms-transform: rotate(360deg); transform: rotate(360deg); }
}

@-webkit-keyframes cssload-spin {
	100%{ -webkit-transform: rotate(360deg); transform: rotate(360deg); }
}

@-moz-keyframes cssload-spin {
	100%{ -moz-transform: rotate(360deg); transform: rotate(360deg); }
}
`
const Spinner = () => (
  <Container>
    <div class="cssload-speeding-wheel" />
  </Container>
)

export default Spinner
this.setState(() => ({
    
    }))

  componentWillMount() {
    console.log(`ComponentWillMount aka first in line`)
  }

  componentDidMount() {
    console.log(`ComponentDidMount aka AJAX calls renders, after dom mounts`)
  }
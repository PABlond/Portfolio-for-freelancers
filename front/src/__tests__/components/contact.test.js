import React from "react"
import renderer from "react-test-renderer"
import { shallow, configure } from "enzyme"
import Contact from "../../components/Contact"
import Adapter from "enzyme-adapter-react-16"

configure({ adapter: new Adapter() })

const constactShallowCfg = () => {
  const props = {
    content: { n: "1" },
  }
  const enzymeWrapper = shallow(<Contact {...props} />)
  return {
    props,
    enzymeWrapper,
  }
}

describe("Shallow rendered Contact", () => {
  it("should render match snapshot", () => {
    const component = renderer.create(<Contact />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("should render contact as expected", () => {
    const { enzymeWrapper } = constactShallowCfg()
    expect(enzymeWrapper.find("h1").text()).toBe("Want to hire me ?")
  })
})

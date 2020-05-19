import React from 'react'

const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            {props.parts.map(part =>
                <Part key={part.id} part={part}></Part>
            )}
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <p>
                {props.part.name} {props.part.exercises}
            </p>
        </div>
    )
}

const Total = (props) => {
    const arr = []
    props.parts.forEach((part) =>
        arr.push(part.exercises)
    )
    const total =
        arr.reduce((s, p) => s + p)
    return (
        <div>
            <strong>total of {total} exercises</strong>
        </div>
    )
}

const Course = (props) => {
    return (
        <div>
            <Header course={props.course.name} />
            <Content parts={props.course.parts} />
            <Total parts={props.course.parts} />
        </div>
    )
}

export default Course
package myapp

import grails.rest.*
import grails.converters.*


class HelloController {

    static responseFormats = ['json', 'xml']
    static allowedMethods = [index: "GET"]

    def index() {

        def test = "Hello, World"
        [test:test]
    }
}

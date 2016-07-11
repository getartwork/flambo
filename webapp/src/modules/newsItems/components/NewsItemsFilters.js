'use strict'

import React, { Component, PropTypes } from 'react'
import { FormattedMessage }            from 'react-intl'
import Select                          from 'react-select'


class NewsItemsFilters extends Component {
    constructor(props) {
        super(props)

        this.handleTypeUpdate = this.handleTypeUpdate.bind(this)
    }

    handleTypeUpdate(sourceTypes) {
        const { filters, onChange } = this.props
        onChange({
            ...filters,
            sourceType: sourceTypes ? sourceTypes.map(({ value }) => value) : [],
        })
    }

    render() {
        const { filters } = this.props

        const options = [
            { value: 'twitter', label: 'Twitter' },
            { value: 'rss',     label: 'RSS'     },
            { value: 'meetup',  label: 'Meetup'  }
        ]

        return (
            <div>
                <div>
                    <Select
                        name="newsItemsSourceTYpe"
                        value={filters.sourceType || ''}
                        options={options}
                        onChange={this.handleTypeUpdate}
                        multi={true}
                    />
                </div>
            </div>
        )
    }
}

NewsItemsFilters.propTypes = {
    filters: PropTypes.object.isRequired,
}


export default NewsItemsFilters

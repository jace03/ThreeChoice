# Spec Delta

## Purpose

The home page for ThreeChoice: presents 3 sample websites as clickable options and routes the visitor into whichever one they pick.

## ADDED Requirements

### Requirement: Home page lists all 3 options
The system SHALL display a home page listing exactly 3 clickable options, one for each sample site (A, B, C), each clearly distinguishable (label or preview).

#### Scenario: Visitor loads the home page
- **WHEN** a visitor navigates to the site root
- **THEN** the home page renders 3 distinct, clickable options, one per sample site

### Requirement: Selecting an option navigates to that sample site
The system SHALL navigate the visitor to the corresponding sample site's own route when they click one of the 3 options, without a full page reload.

#### Scenario: Visitor clicks an option
- **WHEN** a visitor clicks one of the 3 options on the home page
- **THEN** the browser navigates to that sample site's route and renders its content

### Requirement: Visitor can return to the home page
The system SHALL provide a way to navigate back to the home page from within any sample site.

#### Scenario: Visitor backs out of a sample site
- **WHEN** a visitor is viewing a sample site and activates the "back to picker" control (or browser back)
- **THEN** the home page is shown again with all 3 options

# Spec Delta

## Purpose

Sample website "B": one of the 3 candidate directions the friend can preview and choose from ThreeChoice's home page.

## ADDED Requirements

### Requirement: Sample site B is reachable via its own route
The system SHALL render sample site B's content when the visitor navigates to its route (directly, or via the home page option).

#### Scenario: Visitor opens sample site B
- **WHEN** a visitor navigates to sample site B's route
- **THEN** sample site B's content renders, distinct in look/content from sites A and C

### Requirement: Sample site B content is placeholder pending theme decision
The system SHALL render clearly-labeled placeholder content for sample site B until a real theme/content direction is chosen; the exact visual design and copy are out of scope for this change.

#### Scenario: Visitor views sample site B before a theme is chosen
- **WHEN** a visitor opens sample site B
- **THEN** the page identifies itself as "Sample Site B" so it can be evaluated distinctly from A and C

# Spec Delta

## Purpose

Sample website "A": one of the 3 candidate directions the friend can preview and choose from ThreeChoice's home page.

## ADDED Requirements

### Requirement: Sample site A is reachable via its own route
The system SHALL render sample site A's content when the visitor navigates to its route (directly, or via the home page option).

#### Scenario: Visitor opens sample site A
- **WHEN** a visitor navigates to sample site A's route
- **THEN** sample site A's content renders, distinct in look/content from sites B and C

### Requirement: Sample site A content is placeholder pending theme decision
The system SHALL render clearly-labeled placeholder content for sample site A until a real theme/content direction is chosen; the exact visual design and copy are out of scope for this change.

#### Scenario: Visitor views sample site A before a theme is chosen
- **WHEN** a visitor opens sample site A
- **THEN** the page identifies itself as "Sample Site A" so it can be evaluated distinctly from B and C
